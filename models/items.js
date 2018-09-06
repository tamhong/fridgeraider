module.exports = function(sequelize, DataTypes) {
  var Items = sequelize.define("Items", {
    id: {
  		type: DataTypes.INTEGER,
  		primaryKey: true,
  		allowNull: false,
  		autoIncrement: true
  	},
  	item_name: {
  		type: DataTypes.STRING,
  		allowNull: false,
  		required: true
  	},
  	category: {
  		type: DataTypes.STRING,
  		allowNull: false,
  		required: true
  	},
  	exp_date: {
  		type: DataTypes.DATE,
  		allowNull: false,
  		required: true
  	},
  	created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    has_expired: {
    	type: DataTypes.BOOLEAN,
    	allowNull: false,
    	required: true
    }
  },{
  	
  	tableName: "Items"
  });

  Items.associate = function(models) {

  	Items.belongsTo(models.Person, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Items;
};
