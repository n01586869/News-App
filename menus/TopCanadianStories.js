import { useState, useEffect} from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import Story from '../Story'
import json from '../canadian.json'


export default TopCanadianStories = () => {

    const renderStory = ({ item }) => <Story title={item.title} description={item.description} source={item.author} />;
    
    const API_KEY = "26e9d3b1425a45f8a2b18869e171cc65"
    const API = `https://newsapi.org/v2/top-headlines?country=ca&apiKey=${API_KEY}`

    const [stories, setStories] = useState([])

    // useEffect(()=>{
    //     fetch(API)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setStories([{title: "this is a title", description: "this is a description", source: "The Source"}])
    //     })
    //     .catch((err)=>console.log(err))

    // }, [])

    useEffect(()=>{
        setStories(json.articles)
    }, [])

    return(
    <SafeAreaView>
        <FlatList 
            keyExtractor={(item) => item.title}
            data={stories}
            renderItem={renderStory}
        />
    </SafeAreaView>
    )
}