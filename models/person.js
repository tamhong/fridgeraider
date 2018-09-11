module.exports = function (sequelize, DataTypes) {
	var Person = sequelize.define(
		"Person", {
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true
			},
			username: {
				type: DataTypes.STRING,
				allowNull: false,
				required: true
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				required: true
			},
			phoneNumber: {
				type: DataTypes.STRING,
				allowNull: false
			},
			fridgeName: {
				type: DataTypes.STRING,
				allowNull: false,
				required: true
			}
		},
		{
			tableName: "Person"
		});


	Person.associate = function (models) {

		Person.hasMany(models.Items, {
			onDelete: "cascade"
		});
	};


	return Person;
};
