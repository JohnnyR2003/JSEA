/**
 * COLOCAR OS IMPORTS
 */
import swaggerUi from 'swagger-ui-express'
import yaml from 'yamljs'
import express from "express"
import cors from 'cors'
import hbs from 'hbs'
import url from 'url'
import path from 'path'
import passport from 'passport'
import expressSession from 'express-session'

import secaWebApi from './web/api/seca-web-api.mjs'
import secaServices from './services/seca-services.mjs' 
import mockSecaServices from './services/mock-seca-services/mock-seca-services.mjs'
//import * as secaDatamem from './data-mem/seca-data-mem.mjs' 
import secaDatamem from './data/elastic/seca-elastic-data-mem.mjs'
//import * as secaUser from './data/seca-users.mjs' 
import secaUser from './data/elastic/seca-elastic-users.mjs'
import * as secaApi from './data/seca-data.mjs'
import secaWebSite from './web/site/seca-web-site.mjs'

const PORT = 6969

const secaUsersElastic = await secaUser()
const secaDataMemElastic = await secaDatamem()
const SERVICES = secaServices(secaDataMemElastic,secaUsersElastic, secaApi)
const serviceaMock = mockSecaServices() //criar para testes
//const API = secaWebApi(SERVICES);
const SITE = secaWebSite(SERVICES)
const API = secaWebApi(serviceaMock);


const swaggerDocument = yaml.load('./docs/seca-api.yaml')
console.log("Starting server")
export let app = express() //export para os testes

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(cors())
app.use(express.json())
app.use('/site', express.static('./web/site/views/public'))
app.use(express.urlencoded({extended: true})) 
//app.use(cockieParser())
//app.use(passport.session())
//app.use(passport.initialize())

// view engine setup
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'web', 'site', 'views' ));

//app.use(cookieMwSession)


//WEB-SITE
//publicas
app.get('/site/public/home', SITE.homePage)
app.get('/site/private/login', SITE.loginPage)
app.get('/site/private/register', SITE.registerPage)
app.get('/site/public/popularEvents', SITE.popularEventsPage)
app.get('/site/public/searchEvents', SITE.searchEventsPage)
app.get('/site/public/oneEvent/:id', SITE.oneEvent)

app.get('/site/private/logout', SITE.logout)


//autenticadas
app.post('/site/private/homeUser', SITE.createUser)
app.post('/site/private/tryLogin', SITE.tryLogin)
app.get('/site/private/userHome', SITE.homeUser)
app.get('/site/private/createGroup', SITE.createGroup)
app.post('/site/private/createGroup', SITE.createNewGroup)
app.get('/site/private/oneGroup/:id', SITE.getGroup)
app.post('/site/private/delete/:id', SITE.deleteGroup)
app.get('/site/private/edit/:id', SITE.editGroup)
app.post('/site/private/editingGroup/:id', SITE.editingGroup)
app.post('/site/private/addEvent', SITE.addEvent)
app.post('/site/private/removeEvent/:id', SITE.removeEvent)

//WEB-API
app.get('/popularEvents', API.getEvents) //pode ter parametro ou nao, implementar API
app.get('/searchEvent/:name', API.getEventsByName) //pode ter mais dois parametros
app.get('/group', API.getGroups) //obter os grupos todos
app.get('/group/details/:id', API.getGroup) //obteros detalhes de um grupo
app.post('/group/create', API.createGroup) //criar um grupo, informação no body
app.post('/group/addEvent/:id', API.addEvent) //adicionar evento a um grupo, informação no body
app.put('/group/editGroup/:id', API.editGroup) //editar nome e descrição do grupo, informaçao no body
app.delete('/group/delete/:id', API.deleteGroup) //apagar grupo
app.delete('/group/removeEvent/:id/:eventid', API.removeEventFromGroup) // remover um event do gruo indicado
app.post('/user/create', API.createUser) //criar user, informaçoes no body
//app.get('/group/eventDetails/:id/:idEvent', API.getEventDetails) //obter detalhes de um evento
app.get('/group/eventDetails/:idEvent', API.getEventDetails) //obter detalhes de um evento

app.listen(PORT, () => console.log(`Server listening in http://localhost:${PORT}`))

console.log("Ending server")