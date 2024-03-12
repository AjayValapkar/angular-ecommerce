import { Address } from "./address"

export class Customer {
    customerId !: number 
    firstname !: string 
    lastname !: string 
    email !: string 
    password !: string 
    confirmpassword !: string 
    // orders : Order | null
    address: Address[]=[]
    // cart : Cart[]=[]
   
}
