import React, { useEffect } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 10%;
    justify-content: space-between;
    padding-top: 60px;
    ${mobile({ paddingTop: "50px" })}
`

const Title = styled.h1`
    text-align: center;
    margin-bottom: 0px;
`;

const Desc = styled.p`
    flex: 1;
    margin: 20px 0px;
    p:not(:last-child) {
    margin-bottom: 16px;
  }
`
const Policies = () => {

    useEffect(() => {
        const policy = document.querySelector(window.location.hash);
        if (policy) {
          const navbarHeight = document.getElementById('NavBar').offsetHeight;
          window.scrollBy({ top: policy.getBoundingClientRect().top - navbarHeight, behavior: 'smooth' });
        }
      }, []);
      
         

    return (
        <Container>
        <Title id="PrivacyPolicy">Privacy Policy</Title>
        <Desc>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at libero est. Aenean sit amet rhoncus nulla. Donec sit amet ex eu risus lobortis pretium ut et arcu. Mauris dignissim leo vel tortor malesuada mattis. Sed non nisl ac tortor hendrerit placerat. In aliquam fermentum efficitur. Suspendisse eu urna at libero imperdiet feugiat. Sed purus est, faucibus eget lacus auctor, porttitor ultricies nulla. Sed varius turpis tempus nisi rhoncus rhoncus. Curabitur tempus urna facilisis ipsum tincidunt sagittis.
            </p>
            <p>
            Praesent pharetra euismod nibh vel iaculis. Mauris eu posuere orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris volutpat lobortis suscipit. Fusce at lorem feugiat, fringilla neque vel, fermentum tellus. Cras turpis massa, lacinia at elementum eget, porttitor et lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis tortor velit, blandit ac scelerisque eget, finibus sed mi. Mauris mollis diam diam, tempor pellentesque purus commodo sit amet. Donec sed risus in nisi elementum volutpat. Sed rhoncus risus aliquet egestas finibus. Nam mattis accumsan arcu, vel lacinia eros accumsan vel. Duis bibendum non tortor ac malesuada. Suspendisse potenti. Suspendisse quis auctor sapien, non ultricies risus. Suspendisse potenti.
            </p>
            <p>
            Etiam at enim vehicula, finibus mi eget, tempus orci. Suspendisse potenti. Aenean at neque in nisi sollicitudin varius vitae id erat. Proin porttitor, massa vitae dignissim luctus, nisi mi cursus libero, ac aliquet risus nibh vitae lectus. Morbi malesuada nibh sed leo commodo fermentum vel a tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce euismod eros nec eros varius, vel convallis odio ornare. Sed ut posuere turpis. Curabitur faucibus suscipit massa sed commodo. Nulla facilisi. Ut ornare nunc eget ipsum fringilla, non mollis ante condimentum. Phasellus at aliquet arcu, quis maximus massa. Phasellus eget massa at elit facilisis varius.
            </p>
        </Desc>
        <Title id="RefundPolicy">Refund Policy</Title>
        <Desc>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at libero est. Aenean sit amet rhoncus nulla. Donec sit amet ex eu risus lobortis pretium ut et arcu. Mauris dignissim leo vel tortor malesuada mattis. Sed non nisl ac tortor hendrerit placerat. In aliquam fermentum efficitur. Suspendisse eu urna at libero imperdiet feugiat. Sed purus est, faucibus eget lacus auctor, porttitor ultricies nulla. Sed varius turpis tempus nisi rhoncus rhoncus. Curabitur tempus urna facilisis ipsum tincidunt sagittis.
            </p>
            <p>
            Praesent pharetra euismod nibh vel iaculis. Mauris eu posuere orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris volutpat lobortis suscipit. Fusce at lorem feugiat, fringilla neque vel, fermentum tellus. Cras turpis massa, lacinia at elementum eget, porttitor et lacus. 
            </p>
            <p>
            Etiam at enim vehicula, finibus mi eget, tempus orci. Suspendisse potenti. Aenean at neque in nisi sollicitudin varius vitae id erat. Proin porttitor, massa vitae dignissim luctus, nisi mi cursus libero, ac aliquet risus nibh vitae lectus. Morbi malesuada nibh sed leo commodo fermentum vel a tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce euismod eros nec eros varius, vel convallis odio ornare. Sed ut posuere turpis. Curabitur faucibus suscipit massa sed commodo. Nulla facilisi. Ut ornare nunc eget ipsum fringilla, non mollis ante condimentum. Phasellus at aliquet arcu, quis maximus massa. Phasellus eget massa at elit facilisis varius.
            </p>
        </Desc>
        <Title id="ShippingPolicy">Shipping Policy</Title>
        <Desc>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at libero est. Aenean sit amet rhoncus nulla. Donec sit amet ex eu risus lobortis pretium ut et arcu. Mauris dignissim leo vel tortor malesuada mattis. Sed non nisl ac tortor hendrerit placerat.
            </p>
            <p>
            Praesent pharetra euismod nibh vel iaculis. Mauris eu posuere orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris volutpat lobortis suscipit. Fusce at lorem feugiat, fringilla neque vel, fermentum tellus. Cras turpis massa, lacinia at elementum eget, porttitor et lacus. 
            </p>
            <p>
            Etiam at enim vehicula, finibus mi eget, tempus orci. Suspendisse potenti. Aenean at neque in nisi sollicitudin varius vitae id erat. Proin porttitor, massa vitae dignissim luctus, nisi mi cursus libero, ac aliquet risus nibh vitae lectus. Morbi malesuada nibh sed leo commodo fermentum vel a tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce euismod eros nec eros varius, vel convallis odio ornare. Sed ut posuere turpis. Curabitur faucibus suscipit massa sed commodo. Nulla facilisi. Ut ornare nunc eget ipsum fringilla, non mollis ante condimentum. Phasellus at aliquet arcu, quis maximus massa. Phasellus eget massa at elit facilisis varius.
            </p>
        </Desc>
        <Title id="TermsOfService">Terms of Service</Title>
        <Desc>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at libero est. Aenean sit amet rhoncus nulla. Donec sit amet ex eu risus lobortis pretium ut et arcu. Mauris dignissim leo vel tortor malesuada mattis. Sed non nisl ac tortor hendrerit placerat. In aliquam fermentum efficitur. Suspendisse eu urna at libero imperdiet feugiat. Sed purus est, faucibus eget lacus auctor, porttitor ultricies nulla. Sed varius turpis tempus nisi rhoncus rhoncus. Curabitur tempus urna facilisis ipsum tincidunt sagittis.
            </p>
            <p>
            Praesent pharetra euismod nibh vel iaculis. Mauris eu posuere orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris volutpat lobortis suscipit. Fusce at lorem feugiat, fringilla neque vel, fermentum tellus. Cras turpis massa, lacinia at elementum eget, porttitor et lacus. 
            </p>
        </Desc>
        </Container>
  );
};

export default Policies;
