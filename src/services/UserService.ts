import axios from "axios"

export class UsersServices{
   
    private static URL:string = 'https://jsonplaceholder.typicode.com'
    
    public static getAllUsers(){
         
        let url:string = `${this.URL}/users`

        return axios.get(url)

    }
}