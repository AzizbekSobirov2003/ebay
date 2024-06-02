
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./LikePage.scss"


const LikePage = () => {

  interface RootState {
    likeData: {
      like: YourCartType[];
    }
  }

  type YourCartType = {
    id: number;
    images: string[];
    title: string;
  };

  const likeData = useSelector((state: RootState) => state.likeData.like)
  console.log(likeData);

  return (
    <>
      <div className='likePage'>
        {likeData.map((liked: YourCartType) => (
          <Link key={liked.id} to={`/singlePage/${liked.id}`}>
            <div className='likePage_items'>
              <img src={liked.images[0]} style={{ width: "300px" }} />
              <h1>{liked.title}</h1>
            </div>
          </Link>
        ))
        }
      </div>
    </>
  )
}

export default LikePage
