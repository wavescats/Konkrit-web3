import Collections from "@components/organisms/Collections";
import SectionLayout from "../molecules/SectionLayout";
import SectionTop from "../molecules/SectionTop";

function OpenseaTopCollections() {
  return (
    <SectionLayout>
      <SectionTop title="많이 거래된 컬렉션" showAll="오픈씨 데이터 기준" />
      <Collections />
    </SectionLayout>
  );
}

export default OpenseaTopCollections;
