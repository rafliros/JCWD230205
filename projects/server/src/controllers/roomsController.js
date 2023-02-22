// Import Sequelize
const { sequelize } = require('../models')
const { Op } = require('sequelize');

// To generate UID
const { v4: uuidv4 } = require('uuid');

// Import models
const db = require('../models/index')
const users = db.users
const property = db.properties
const rooms = db.rooms
const rooms_image = db.rooms_images
const transaction = db.transaction

module.exports = {
    // Note Cari Data Melalui MysQl
    
    search: async (req, res) => {
    // To rollback transactions
    const t = await sequelize.transaction() 
        try {

            // Note mengunnakan Param di Postman 

            // Step-1 Ambil input search dari users

            let {checkin, checkout, location} = req.query

            // Step-2 Search datanya berdasarkan input user

            if(checkin && checkout && location && from && to){
                // var findRoomsBy = await sequelize.query(`
                //     SELECT a.hotels_id, a.hotels_name, b.rooms_price, b.total_rooms_each_hotels, a.total_room_booked, b.total_rooms_each_hotels - a.total_room_booked as total_room_available
                //     FROM 
                //     (
                //     SELECT h.id as hotels_id, h.name as hotels_name, hr.name as room_name, IFNULL(SUM(get_room_booked_by_date_range(?, ?, t.checkin, t.checkout, t.hotels_rooms_id, t.total_room)), 0) as total_room_booked
                //     FROM transactions t
                //     RIGHT JOIN hotels_rooms hr ON hr.id = t.hotels_rooms_id
                //     JOIN hotels h ON h.id = hr.hotels_id
                //     GROUP BY h.id
                //     ) as a
                //     CROSS JOIN
                //     (
                //     SELECT h.id as hotels_id, h.name, SUM(total_room) as total_rooms_each_hotels, hr.price as rooms_price FROM hotels h
                //     JOIN hotels_rooms hr ON h.id = hr.hotels_id
                //     GROUP BY h.id
                //     ) as b
                //     ON a.hotels_id = b.hotels_id WHERE location = ? 
                //     AND (price >= ? AND price <= ?)
                //     GROUP BY a.hotels_id;
                // `, {
                //     replacements: [checkin, checkout, location],
                //     type: sequelize.QueryTypes.SELECT
                // })
            }

            

        } catch (error) {
            res.status(500).send({
                isError: true, 
                message: error.errors[0].message, 
                data: null
            }) 
        }
    },





}