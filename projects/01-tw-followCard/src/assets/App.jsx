import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [

    {userName: 'Nfs_07',
    name: 'Nicolas Fernandez',
    isFollowing: false
    },

    {userName: 'Cayasa_01',
     name: 'Camilo Yara',
     isFollowing: false
    },

    {userName: 'Sanis672',
     name: 'Isabel Sanchez',
     isFollowing: true}

]

export function App() {
    return(
        <section className='App'>
            {
                users.map(({userName, name, isFollowing})=> (
                    <TwitterFollowCard key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}>
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}