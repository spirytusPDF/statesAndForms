export default function Task1({users})
{
    const getFilteredUsers = () =>{
        return users.filter((user)=>user.age>30);
    }
    
    return(
    <div>
       {
       getFilteredUsers()
       .map(u=>(
       <li key={u.id}>
        {u.name} - {u.age}
        </li>)
        )
        } 
    </div>
    );
}