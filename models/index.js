var Sequelize = require('sequelize')
var mapdb = new Sequelize('postgres://localhost:5432/mapdb', {
    logging: function(QUERY) {
        console.log('QUESRY>>>>', QUERY, '\n')
    }
});



var placeSchema = {
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    location: {
        type: Sequelize.ARRAY(Sequelize.FLOAT),
        allowNull: false
    },
};

var Place = mapdb.define('place', placeSchema)

var hotelSchema = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    num_stars: {
        type: Sequelize.INTEGER,
        validate: {
            min: 1,
            max: 5
        }
    },
    amenities: {
        type: Sequelize.STRING,
        allowNull: false
    },
}

var Hotel = mapdb.define('hotel', hotelSchema)


var activitySchema = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age_range: {
        type: Sequelize.STRING,
        allowNull: false
    }
};

var Activity = mapdb.define('activity', activitySchema)

var restaurantSchema = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cuisine: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        validate: {
            min: 1,
            max: 5
        }
    }
}
var Restaurant = mapdb.define('restaurant', restaurantSchema)


Hotel.belongsTo(Place)
Restaurant.belongsTo(Place)
Activity.belongsTo(Place)

module.exports = {
    Place: Place,
    Hotel: Hotel,
    Activity: Activity,
    Restaurant: Restaurant,
    mapdb: mapdb

}
