import React from 'react'
import Layout  from '../components/Layout'
export default function About() {
    return (
        <Layout>
            <div className="about-page">
                <h1>Kashida:  What Does It Mean?</h1>
                <p>
                Kashida refers to a character that represents an elongation in the arabic script (ـــ). It is used for text justification and readability enhancement. 
                In the past, the Kashida was spread on a wide scale. It was used in beautifying the quaran, books, letters, and all kinds of text. 
                </p>
                <p>No Kashida: حكيم / After Kashida: حــــــــكــــيــم</p>
                <h2>Goal of KashidaJS</h2>
                <p>Sadly, the  Kashida  didn't survive the technological revolution. Despite the fact that it has a valid unicode  character, no one uses it and includes it in his/her online texts. The kashida therefore sleeps in old scriptures and yellow paper. </p>
                <p> KashidaJS is an effort to revive the kashida. Bring it to the 21st century. This tool  provides a text based solution that can be pasted anywhere to enhance the readability and structure of your text. Engage  your readers. This is the first tool of its kind as there are no online and easily accessible kashida generators. It is fair to note that Adobe Illustrator provides a visual text justification that can be exported into an image, but can't be pasted. There are also some <a href="http://andreasmhallberg.github.io/stretchable-kashida/" target="_blank" rel="noopener noreferrer">latex algorithms </a> that generate kashida</p>      
            </div>
        </Layout>
    )
}
