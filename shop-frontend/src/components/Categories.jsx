import styled from "styled-components"
import {categories} from "../data"
import { mobile } from "../responsive"
import CategoryItem from "./CategoryItem"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ 
      padding: "0px",
      paddingTop: "50px", 
      flexDirection:"column" 
    })}
`

const Categories = () => {
  return (
    //no item.id added yet. Might have to be item._id
    <Container>
        {categories.map(item => (
            <CategoryItem key={item.id} item={item}/>
        ))}
    </Container>
  )
}

export default Categories