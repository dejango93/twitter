import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){
    /* Función para formatear el userName con un @ delante */
    const format = (userName) => `@${userName}` 
    /* Array con los valores de los distintos componentes */
    const users = [
        {
            userName: "midudev",
            name: "Miguel Angel Duran",
            isFollowing : true 
        },
        {
            userName: "microsoft",
            name: "Microsoft",
            isFollowing : false 
        },
        {
            userName: "apple",
            name: "Apple Company",
            isFollowing : false 
        }
    ]
    return (
        <section className='App'>
            {
                /* Bucle para crear componentes con el array de users*/
                users.map(user => {
                    const {userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard 
                            key={userName}
                            formatUserName={format} 
                            userName={userName} 
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}