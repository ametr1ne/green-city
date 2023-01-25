const sequelize = require('../db')
const {DataType, DataTypes} = require('sequelize') 

const Admin = sequelize.define('admin', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
})

const Volunteer = sequelize.define('volunteer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    fullname: {type: DataTypes.STRING}, 
    birthDate: {type: DataTypes.DATE},
})

const Event = sequelize.define('event', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT}, 
    date: {type: DataTypes.DATE},
})

const Organization = sequelize.define('organization', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const CityProblem = sequelize.define('city_problem', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT},
})

const CategoryOfOrganization = sequelize.define('category_of_organization', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const ProblemSolutionStage = sequelize.define('problem_solution_stage', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    stage: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const OrganizationCategory = sequelize.define('organization_category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const OrganizationCityProblem = sequelize.define('organization_city_problem', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

CityProblem.hasMany(Organization)
Organization.belongsTo(CityProblem)

CategoryOfOrganization.hasMany(Organization)
Organization.belongsTo(CategoryOfOrganization)

ProblemSolutionStage.hasOne(CityProblem)
CityProblem.belongsTo(ProblemSolutionStage)

Organization.hasMany(CityProblem)
CityProblem.belongsToMany(Organization, {through: OrganizationCityProblem})

module.exports = {
    Admin,
    Volunteer, 
    Event,
    Organization,
    CategoryOfOrganization,
    CityProblem,
    ProblemSolutionStage,
    OrganizationCategory,
    OrganizationCityProblem
}

