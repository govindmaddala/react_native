import React from 'react'
import { SectionList, Text, View } from 'react-native'

const _10_SectionList = () => {
    const data = [
        {
            id: 1,
            name: "Aron",
            data: ["C", "Python", "Django"],
            lastCompany: ["Facebook", "Microsoft"][0]
        },
        {
            id: 2,
            name: "Bella",
            data: ["JavaScript", "React", "Node.js"],
            lastCompany: ["Google", "Amazon"][0]
        },
        {
            id: 3,
            name: "Chris",
            data: ["Java", "Spring Boot", "Hibernate"],
            lastCompany: ["Oracle", "Netflix"][0]
        },
        {
            id: 4,
            name: "Diana",
            data: ["HTML", "CSS", "Angular"],
            lastCompany: ["Adobe", "Apple"][0]
        },
        {
            id: 5,
            name: "Evan",
            data: ["Go", "Kubernetes", "Docker"],
            lastCompany: ["IBM", "Intel"][0]
        },
        {
            id: 6,
            name: "Fiona",
            data: ["Ruby", "Rails", "PostgreSQL"],
            lastCompany: ["Shopify", "Stripe"][0]
        },
        {
            id: 7,
            name: "George",
            data: ["Swift", "Objective-C", "iOS Development"],
            lastCompany: ["Apple", "Tesla"][0]
        },
        {
            id: 8,
            name: "Hannah",
            data: ["PHP", "Laravel", "MySQL"],
            lastCompany: ["WordPress", "Wix"][0]
        },
        {
            id: 9,
            name: "Ian",
            data: ["Scala", "Akka", "Spark"],
            lastCompany: ["LinkedIn", "Twitter"][0]
        },
        {
            id: 10,
            name: "Julia",
            data: ["TypeScript", "Vue.js", "Nuxt.js"],
            lastCompany: ["Slack", "Zoom"][0]
        },
        {
            id: 11,
            name: "Kevin",
            data: ["C++", "OpenCV", "Computer Vision"],
            lastCompany: ["NVIDIA", "Autodesk"][0]
        },
        {
            id: 12,
            name: "Lily",
            data: ["Python", "TensorFlow", "Machine Learning"],
            lastCompany: ["DeepMind", "OpenAI"][0]
        },
        {
            id: 13,
            name: "Max",
            data: ["Rust", "WebAssembly", "Blockchain"],
            lastCompany: ["Parity", "Consensys"][0]
        },
        {
            id: 14,
            name: "Nina",
            data: ["Perl", "Shell Scripting", "System Administration"],
            lastCompany: ["Red Hat", "VMware"][0]
        },
        {
            id: 15,
            name: "Oscar",
            data: ["ASP.NET", "C#", "Azure"],
            lastCompany: ["Microsoft", "Dell"][0]
        },
        {
            id: 16,
            name: "Paula",
            data: ["React Native", "Expo", "Mobile Development"],
            lastCompany: ["Uber", "Lyft"][0]
        },
        {
            id: 17,
            name: "Quincy",
            data: ["Elixir", "Phoenix", "GraphQL"],
            lastCompany: ["Pinterest", "SoundCloud"][0]
        },
        {
            id: 18,
            name: "Rachel",
            data: ["Data Analysis", "R", "Tableau"],
            lastCompany: ["Airbnb", "Booking.com"][0]
        },
        {
            id: 19,
            name: "Sam",
            data: ["SQL", "BigQuery", "ETL"],
            lastCompany: ["Snowflake", "Databricks"][0]
        },
        {
            id: 20,
            name: "Tina",
            data: ["Java", "Android Development", "Firebase"],
            lastCompany: ["Spotify", "TikTok"][0]
        }
    ];
    
  return (
    <View>
        <Text>_10_SectionList</Text>
        <SectionList 
            sections={data}
            renderItem={({item})=><Text>{item}</Text>}
            renderSectionHeader={({section: {name}})=> <Text style={{fontSize: 30, fontWeight: "bold"}}>{name}</Text>}
            renderSectionFooter={({section: {lastCompany}})=> <Text style={{fontSize: 20, fontWeight: "bold", color: 'red'}}>{lastCompany}</Text>}
        />
    </View>
    
  )
}

export default _10_SectionList