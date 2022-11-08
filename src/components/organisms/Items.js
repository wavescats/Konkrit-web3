import HideScrollX from "@components/molecules/HideScrollX";
import Item from "@components/molecules/Item";
import LoadingSpinner from "@components/atoms/LoadingSpinner";
import styled from "styled-components";
import useData from "src/hooks/useData";

const LoadingWrapper = styled.div`
  height: 275px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Items() {
  const { data, isLoading, isError } = useData(
    { items: [] },
    "http://localhost:3000/api/items"
  );

  if (isLoading) {
    return (
      <LoadingWrapper>
        <LoadingSpinner />
      </LoadingWrapper>
    );
  }
  if (isError) {
    return <div>에러</div>;
  }

  return (
    <HideScrollX>
      {data.items.map(item => (
        <Item item={item} key={item.id} />
      ))}
    </HideScrollX>
  );
}

export default Items;
