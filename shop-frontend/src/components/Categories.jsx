import styled from "styled-components"
import {categories} from "../data"
import { mobile } from "../responsive"
import CategoryItem from "./CategoryItem"

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ 
      padding: "50px 10px 0px 10px",
      flexDirection:"column" 
    })}
`
const Title = styled.h1`
    font-weight: 700;
    flex-grow: 1;
    flex-basis: 100%;
    text-align: center;
    padding-bottom: 20px;
    ${mobile({ 
      padding: "10px 0px",
    })}
`;

const Categories = () => {
  return (
    //no item.id added yet. Might have to be item._id
    <Container>
      <Title>Categories</Title>
      {categories.map(item => (
          <CategoryItem key={item.id} item={item}/>
      ))}
    </Container>
  )
}

export default Categories