var express = require('express');
var router = express.Router();
var novedadesModel = require('../models/novedadesModel.js');
var util = require('util');
var cloudinary = require('cloudinary').v2;

const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET home page. */
router.get('/', async function(req, res, next) {
    var novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedad => {
        if(novedad.img_id) {
          const imagen = cloudinary.image(novedad.img_id, {
            width: 100,
            height: 100,
            crop: 'fill'
          });
          return {
            ...novedad,
            imagen
          }
        } 
        else {
            return {
              ...novedad,
              imagen: ''
            }
          }
    });

    res.render('novedades', { 
      title: 'SinTiempoPagina - ADMINISTRADOR',
      layout: './layoutNov',
      usuario: req.session.nombre,
      novedades
    });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar' , {
    layout: './layoutNov',  
  });
});

router.post('/agregar', async (req, res, next) => {
  try {
    var img_id = '';
    if(req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
      await novedadesModel.insertNovedad({
        ...req.body,
        img_id
      });
      res.redirect('/novedades')
    } else {
      res.render('admin/agregar' , {
        error: true, message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      error: true, message: 'No se cargó la novedad'
    });
  }
});

router.post('/modificar', async (req, res, next) => {
  try {
      let img_id = req.body.img_original;
      let borrar_img_vieja = false;
      if(req.body.img_delete === "1") {
          img_id = null;
          borrar_img_vieja = true;
          console.log("*******log!");
      } else {
        console.log(req.files);
        if(req.files && Object.keys(req.files).length > 0) {
          imagen = req.files.imagen;
          
          img_id = (await
            uploader(imagen.tempFilePath)).public_id;
            borrar_img_vieja = true;
        }
      }
      if (borrar_img_vieja && req.body.img_original) {
          await(destroy(req.body.img_original));
      }
      let obj = {
        titulo: req.body.titulo,
        subtitulo: req.body.subtitulo,
        cuerpo: req.body.cuerpo,
        img_id
      }
      await novedadesModel.modificarNovedad(obj, req.body.id);
      res.redirect('/novedades')
  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      error: true, message: 'No se cargó la novedad'
    });
  }
});

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;

  let novedad = await novedadesModel.getNovedad(id);
  if (novedad.img_id) {
    await (destroy(novedad.img_id));
  }

  await novedadesModel.deleteNovedad(id);
  res.redirect('/novedades')
})

router.get('/modificar/:id', async (req, res, next) => {
  let id = req.params.id;
  let novedad = await novedadesModel.getNovedad(id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    novedad
  })
})

router.get('/getCuerpo/:id', async (req, res, next) => {
  let id = req.params.id;
  let novedades = await novedadesModel.getNovedades();
  let cuerpo = await novedadesModel.getCuerpo(id);

  novedades = novedades.map(novedad => {
    if(novedad.img_id) {
      const imagen = cloudinary.image(novedad.img_id, {
        width: 100,
        height: 100,
        crop: 'fill'
      });
      return {
        ...novedad,
        imagen
      }
    } 
    else {
        return {
          ...novedad,
          imagen: ''
        }
      }
});

  res.render('novedades', { 
    title: 'Sin Tiempo', 
    layout: './layoutNov',
    usuario: req.session.nombre,
    novedades,
    cuerpo
  });

})

module.exports = router;
