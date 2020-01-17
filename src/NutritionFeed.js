import React from 'react';
import Post from './Post';

class NutritionFeed extends React.Component{

   render(){
     //all posts
     //nutritionPosts = posts.filter(post => post.nutrition == true)
        return (
          <div className="nutrition">
            <h1>Trending in Nutrition</h1>
            {
              this.props.posts.map((post, indx) =>{
                return <Post 
                          key={indx}
                          post={post}
                        />
              })
            }
          </div>
        )
    } 
}
export default NutritionFeed 