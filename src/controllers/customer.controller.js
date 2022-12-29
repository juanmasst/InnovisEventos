import Customer from "../models/Customer";
import router from "../routes/customer.routes";




export class controllerCustomer{

    // Crea cliente
    async createCustomer(req,res){
        
        try {
            //  la variable cliente guarda los datos enviados por el formulario.
            const cliente ={
                fname: req.body.fname,
                lname: req.body.lname,
                dni: req.body.dni,
                address: req.body.address,
                numAddress: req.body.numAddress,
                postalNum: req.body.postalNum   
            }
            // Se crea un schema de clientes para guardar en la base de datos.
            const newCustomer = new Customer(cliente)
            // Se guarda en base de datos el schema instanciado anteriormente | .save()
            const customerSaved = await newCustomer.save()
            res.status(201).redirect('/api/customers')
            console.log("Cliente agregado correctamente")
            
            
        } catch (error) {
            console.log(error)
            res.status(404).json(error)    
        }
    }
    
    // Obtiene todos los clientes en la BD
    async getCustomer(req,res){

        try {
            // consulta todos los pcliente guardados en la vase de datos y los guarda en la variable products
            const customer = await Customer.find()
            res.render('./customer/customerlist',{customer})

        } catch (error) {
            console.log(error)
            res.status(404).json(error)
        }

    }
    // Obtiene cliente por ID
    
    async getCustomerById (req, res){

        try {
            // Consulta por Id el cliente solicitado, y lo guarda en clientes
            const customerId = await Customer.findById(req.params.customerId)
            res.render('./customer/edit',{customerId})
            console.log("cliente obtenido correctamente")

        } catch (error) {
            console.log(error)
            res.status(404).json(error)
        }

    }
    
    // Modifica cliente pro ID
    async updateCustomerById(req,res){

        try {
            // Primero Busca el cliente si lo encuentra lo modifica
            const updatedCustomer = await Customer.findByIdAndUpdate(req.params.customerId, req.body, {
                new: true
            })
            res.redirect('/api/customers')
            console.log("CLIENTE MODIFICXADO")

        } catch (error) {
            console.error(error)
            res.status(404).json(error)
        }

    }
    // Elimina cliente por ID
    async deleteCustomerById(req,res){

        try {
            // Busca y elimina el cliente via ID
            await Customer.findByIdAndDelete(req.params.customerId)
            res.redirect('/api/customers')    
            console.log("borrado exitosamente") 
            
        } catch (error) {
            console.log(error)
            res.status(404).json('Error al eliminar el cliente')
        }
 
    }
}