import Image from "next/image";
import styled from "styled-components";
import { MdCall } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";

const ImageContainer = styled.div`
  position: relative;
  height: 60vh;
  overflow: hidden;
  border-radius: 0 0 2rem 2rem;
  background-color: ${({ theme }) => theme.black};
  box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.05);

  @media (min-width: 767px) {
    height: 100vh;
    border-radius: 0 2rem 2rem 0;
  }

  .dog-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    opacity: 0.8;
  }
`;

const MainWrapper = styled.div`
  @media (min-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const Content = styled.div`
  @media (min-width: 767px) {
    padding: 2rem;
    height: 100vh;
    overflow: scroll;
  }
`;

const PetDetails = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.white};
  border-radius: 1rem;
  max-width: 85%;
  margin: 0 auto;

  position: relative;
  bottom: 3.5rem;

  box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.05);

  @media (min-width: 767px) {
    bottom: 0;
  }

  .line-one,
  .line-two,
  .line-three {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1.125rem;

    span {
      display: block;
    }
  }

  .line-one {
    span:first-child {
      font-size: 1.175rem;
      font-weight: 700;
    }

    .gender {
      padding: 0.5rem 0.75rem;
      border-radius: 1rem;
      background: ${({ theme }) => theme.purple};
      color: ${({ theme }) => theme.white};
    }
  }

  .line-two,
  .line-three {
    font-weight: 500;
    opacity: 0.7;

    span:nth-child(2) {
      opacity: 0.7;
    }
  }
`;

const OwnerDetails = styled.div`
  padding: 1.75rem;
  margin: 0 auto;
  border-radius: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    display: block;
  }

  @media (min-width: 767px) {
    margin-top: 2.75rem;
  }

  .owner-details {
    span:first-child {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 0.75rem;
    }

    span:last-child {
      opacity: 0.6;
    }
  }

  .icon {
    margin-left: 0.85rem;
    font-size: 1.75rem;
    color: ${({ theme }) => theme.purple};

    &:last-child {
      color: ${({ theme }) => theme.blue};
    }
  }
`;

const PetDescription = styled.div`
  line-height: 1.8;
  width: 85%;
  margin: 0 auto;
  opacity: 0.8;

  padding-bottom: 2rem;

  h2 {
    font-weight: 600;
    font-size: 1.125rem;
  }
`;

export default function Pet() {
  return (
    <MainWrapper>
      <ImageContainer>
        <Image
          src="/images/dog.jpg"
          height={200}
          width={200}
          alt=""
          className="dog-img"
          priority
        />
      </ImageContainer>
      <Content>
        <PetDetails>
          <div className="line-one">
            <span>Rishabh</span>
            <span className="gender">male</span>
          </div>
          <div className="line-two">
            <span>Golden Retriever</span>
            <span>1 year 8 months</span>
          </div>
          <div className="line-three">
            <span>Lucknow</span>
            <span>15.5 kg</span>
          </div>
        </PetDetails>

        <OwnerDetails>
          <div className="owner-details">
            <span>Vishal</span>
            <span>owner</span>
          </div>
          <div className="icons">
            <RiMessage3Fill className="icon" />
            <MdCall className="icon" />
          </div>
        </OwnerDetails>

        <PetDescription>
          The Golden Retriever is a Scottish breed of retriever dog of medium
          size. It is characterised by a gentle and affectionate nature and a
          striking golden coat.
          <br />
          <br /> It is commonly kept as a pet and is among the most frequently
          registered breeds in several Western countries. It is a frequent
          competitor in dog shows and obedience trials; it is also used as a
          gundog, and may be trained for use as a guide dog. The breed was
          created by Sir Dudley Marjoribanks at his Scottish estate Guisachan in
          the late nineteenth century.
          <br />
          <br />
          <h2>Health</h2>
          <br />
          Golden Retrievers are a generally healthy breed; they have an average
          lifespan of 12 to 13 years. Irresponsible breeding to meet high demand
          has led to the prevalence of inherited health problems in some breed
          lines, including allergic skin conditions, eye problems and sometimes
          snappiness. These problems are rarely encountered in dogs bred from
          responsible breeders.
          <br />
          <br />
          <h2>Temperament</h2>
          <br />
          The Golden Retriever is considered an intelligent, gentle natured and
          very affectionate breed of dog. As is typical with retriever breeds,
          the breed is generally calm and biddable, being very easy to train and
          extremely keen to please their master. The breed is known to make
          excellent pets and family dogs, being generally extremely tolerant of
          children and keen to accompany any member of the family in a range of
          activities. Due to their affable natures, the breed is often
          completely devoid of guarding instincts.
        </PetDescription>
      </Content>
    </MainWrapper>
  );
}
