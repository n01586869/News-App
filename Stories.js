import { useState, useEffect} from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import Story from './Story'


export default Stories = (props) => {

    const renderStory = ({ item }) => (
        <Story
        title={item.title}
        description={item.description}
        source={item.source.name}
        img={item.urlToImage}
        url={item.url}
        />
    )
    
    const API_KEY = "26e9d3b1425a45f8a2b18869e171cc65"
    const LATEST_API = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    const TECH_API = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${API_KEY}`

    const [stories, setStories] = useState([])

    // fetch in own function to do different fetch based on "headline" prop
    const fetchData = (type) => {
        fetch(type)
        .then((res) => res.json())
        .then((data) => {
            setStories(data.articles)
        })
        .catch((err)=>console.log(err))
    }

    // each time headline prop is changed, fetch data
    useEffect(()=>{
        
        switch(props.headlines){
            case "main":
                fetchData(LATEST_API)
                break
            case "tech":
                fetchData(TECH_API)
                break
        }
        
    }, [props.headlines])

    return(
    <SafeAreaView style={{paddingBottom: 60}}>
        <FlatList 
            keyExtractor={(item) => item.title}
            data={stories}
            renderItem={renderStory}
        />
    </SafeAreaView>
    )
}