import { NextApiHandler } from "next"
import fs from 'fs'
import path from "path"
import matter from "gray-matter"

/*
Methods:
GET => when you need to get or read the data.
POST => when you want to send fresh data
PATCH => when you want to update some port of the data
PUT => when you want to replace the old data with new data
DELETE => when you want to remove data
*/

const handler: NextApiHandler = (req, res) => {
  const { method } = req

  // how to read files and folders inside node js

  switch (method) {
    case 'GET': {
      const data = readPostsInfo()
      return res.json({ postInfo: data })
    }
    default: return res.status(404).send('Not Found');
  }
}

const readPostsInfo = () => {
  const dirPathToRead = path.join(process.cwd(), 'posts')
  const dirs = fs.readdirSync(dirPathToRead)
  const data =  dirs.map(filename => {
    const filePathToRead = path.join(process.cwd(), 'posts/' + filename);
    const fileContent = fs.readFileSync(filePathToRead, { encoding: 'utf-8' });
    return matter(fileContent).data
  });
  return data;
}

export default handler