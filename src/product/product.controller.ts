import { Controller, Delete, Get, Post } from "@nestjs/common";


@Controller('/product')
export class productController{

    @Get()
    getProducts(){

    }

    @Post()
    addProducts(){
        
    }

    @Post()
    updateProducts(){
        
    }

    @Delete()
    deleteProducts(){

    }
}