var express=require('express')
var mysql=require('mysql')


var app=express()

//PARAMETROS DE CONEXION
var conexion=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'pw15162022'

});
//NOS CONECTAMOS
conexion.connect(function(error){
    try {
        console.log('conexion exitosa')
    } catch (error) {
        throw error;
    }
})

app.get('/',function(req,res){
    res.send('Ruta de Inicio de Servidor')
})

app.get('/api/articulos',(req,res)=>{
   conexion.query('SELECT * FROM articulos',(error,filas)=>{
    try {
        res.send(filas);
    } catch (error) {
        throw error;
    }
   })
})
//PARA UN SOLO ARTICULO
app.get('/api/articulos/:id',(req,res)=>{
    conexion.query('SELECT * FROM articulos WHERE id = ?',[req.params.id],(error,filas)=>{
     try {
         res.send(filas);
     } catch (error) {
         throw error;
     }
    })
 })


app.listen('3000',function(){
    console.log('Servidor en linea...Ok');
})


//ruta para agregar un articulo
app.post('/api/articulos',function(req,res){
    let data = {descripcion:req.body.descripcion,
                precio:req.body.precio,
                cantidad:req.body.cantidad}
    let sql="INSERT INTO articulos SET ?"
    conexion.query(sql,data,function(error,results){
        if(error){
            throw error
        }
        else{
            res.send(results)
        }
    })
})
