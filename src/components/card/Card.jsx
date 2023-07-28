import{Head} from '../head/Head'
import data from '../../data.json'
import './Card.css'

export const Card = () => {
    return data.map((photo) => {
            return (
                <div key={photo.id} style={{
                    backgroundColor: 'black',
                    
                }} >
                    <img src={photo.url} className="" alt={photo.title} />
                    <div >
                        <h5> Card-title:{photo.title}</h5>
                        <Head id='id-123' clas='card-title'>
                            asdasd
                            <div>
                                asdasd
                            </div>
                            <p>asdasd</p>
                        </Head>
                        <a href="http" className="">Go somewhere</a>
                    </div>
                </div>
            )
        }
        )
    
}