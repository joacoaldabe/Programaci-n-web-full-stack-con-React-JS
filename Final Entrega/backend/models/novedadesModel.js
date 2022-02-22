var pool = require('./bd');

async function getNovedades() {
    try  {
        var query = "SELECT * FROM listanovedades order by id desc";
        var rows = await pool.query(query);
        return rows;
    } catch (error) {
        throw error;
    }
}

async function insertNovedad(obj) {
    try {
        var query = "insert into listanovedades set ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteNovedad(id) {
    try {
        var query = "delete from listanovedades where id = ?";
        var rows = await pool.query(query, [id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getNovedad(id) {
    try {
        var query = "select * from listanovedades where id = ?";
        var rows = await pool.query(query, [id]);
        return rows[0];
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getCuerpo(id) {
    try {
        var query = "select id, cuerpo from listanovedades where id = ?";
        var rows = await pool.query(query, [id]);
        return rows[0];
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function modificarNovedad(obj, id) {
    try {
        var query = "update listanovedades set ? where id = ?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { getNovedades, insertNovedad, deleteNovedad, getNovedad, modificarNovedad, getCuerpo }