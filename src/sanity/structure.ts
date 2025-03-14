import type {StructureResolver} from 'sanity/structure'
import { BiLogoBlogger } from "react-icons/bi";
import { BsFilePost } from 'react-icons/bs';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('blog').title('Blogs').icon(BiLogoBlogger),
      S.documentTypeListItem('post').title('Posts').icon(BsFilePost)
    ])
