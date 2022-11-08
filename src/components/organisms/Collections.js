import LoadingSpinner from "@components/atoms/LoadingSpinner";
import Collection from "@components/molecules/Collection";
import useData from "src/hooks/useData";
import styled from "styled-components";

const CollectionList = styled.ul`
  margin-top: 16px;
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 1604px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Collections() {
  const { data, isLoading, isError } = useData(
    { openseaCollections: [] },
    "http://localhost:3000/api/opensea-top-collections"
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
    <CollectionList>
      {data.openseaCollections.map((collection, index) => (
        <Collection
          collection={collection}
          index={index + 1}
          key={collection.id}
        />
      ))}
    </CollectionList>
  );
}

export default Collections;
