function User (sequelize, DataTypes) {
    return sequelize.define(
        "member",
        {
            idx: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
        },
            email: {
                type: DatatTypes.STRING(30),
                allowNull: false,
                unique: true
            },
            pw: {
                type: DataTypes.STRING(30),
                allowNull: false,
                unique: true
            },
            nickname: {
                type: DataTypes.STRING(30),
                allowNull: false,
                unique: true
            }
    },
    {
        tableName: 'member',
        freezeTableName: true,
        timestamp: false
    }
    )
}

module.exports = User;