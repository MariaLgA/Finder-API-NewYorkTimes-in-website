//require("./articles")
const { Client } = require ('pg')
const https = require("node:https")
const { connect } = require('node:net')


//conexao do banco


const cn = new Client (
{
    user: 'postgres',
    password: 'sorvete',
    host: '127.0.0.1',
    database: 'data_nyt',
    port: '5432'
})

async function a()
{
    cn.connect((con)=>{
    
    if(con) throw err
    else{ console.log("Conectou")}
})
}

a()

/*/async function timeout(value_time)
{
    return new Promise(resolve =>{
        
        setTimeout(()=> {
            resolve("ok")
        },value_time);

    })
}

async function get_api(url,type)
{
    return new Promise(resolve =>{

        https.get(url,(response)=>{
            console.log("statusCode:",response.statusCode)
            let data = ""
            let obj_data = {}
            
            response.on("data",(d)=>{
                data+=d
            })

            response.on("end",(end)=>{
                let parse_js = JSON.parse(data)
                obj_data = {
                    "data_type": type,
                    "data": parse_js
                }
                resolve(obj_data)
            })

            }).on('error', (e) => {
                console.error(e);
              });
        })
}


async function insert_table(values_query,query)
{
    cn.query(query,values_query,function(err,ok)
    {
        if(err) {console.log("não foi",err)}
        else {"foi"}
    })
}

main()
module.exports = {get_api,insert_table,timeout}/*/