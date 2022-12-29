import { Router } from "express";
const router = Router()
import  {controllerCustomer}  from "../controllers/customer.controller";

const customerCtrl = new controllerCustomer


router.get('/', customerCtrl.getCustomer)  //llama a la ruta con la vista "customerlist"
router.get('/add',(req,res)=>{res.render('./customer/agregar')}) //llama a la vista "agregar"
router.post('/add', customerCtrl.createCustomer)//en la vista "agregar" crea nuevo cliente
router.get('/edit/:customerId', customerCtrl.getCustomerById)
router.post('/edit/:customerId', customerCtrl.updateCustomerById)
router.post('/delete/:customerId', customerCtrl.deleteCustomerById)

export default router;