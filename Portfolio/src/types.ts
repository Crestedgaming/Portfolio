export type types = {

    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    technologies: string[]; 
}



export type Filter = 'All' | 'React' | 'JavaScript' | 'TypeScript' | 'HTML/CSS' | 'Node.js' | 'Express' | 'MongoDB' 