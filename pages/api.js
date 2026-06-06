export class ApiPage{
    constructor(request){
        this.request=request
    }

    async apidataget(){
    const apiresponse = await this.request.get("https://dummyjson.com/products")
    const jsondata = await apiresponse.json() 
    return {jsondata, apiresponse}  

}

async senddataapi (){
    const sendresponse = await this.request.post("https://dummyjson.com/users/add",
        {
            data:{
            "firstName" : "jass"
        }
    }
    )
 const jsonsenddata = await sendresponse.json()
 return {sendresponse, jsonsenddata}


}

async putapidata (){
    const putdata = await this.request.put("https://dummyjson.com/users/209",{
        data:{
            "lastName": "saini"
        }
    })
    const putapijson = await putdata.json()
    return{
        putapijson,putdata
    }
}

async dltapidata(){
     const deleteresponse =
        await this.request.delete(
           "https://dummyjson.com/users/1"
        )

        const deletejson =
        await deleteresponse.json()

        return {
            deleteresponse,
            deletejson
        }

    }
}

