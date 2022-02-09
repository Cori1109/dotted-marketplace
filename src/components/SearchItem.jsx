import { Select } from "antd";
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { getCollectionsByChain } from "helpers/collections";

function SearchItems({ setInputValue }) {
  const { Option } = Select;
  const { chainId } = useMoralisDapp();
  const NFTCollections = getCollectionsByChain(chainId);

  function onChange(value) {
    setInputValue(value);
  }

  return (
    <>
      <Select
        showSearch
        style={{
          display: "flex",
          alignItems: "center",
          maxWidth: "768px",
          height: "45px",
          // padding: "12px",
          fontSize: "14px",
          width: "100%",
          marginLeft: "20px",
          borderRadius: "10px",
          div: {
            height: "45px",
          },
        }}
        placeholder="Search DottedAI"
        optionFilterProp="children"
        onChange={onChange}
      >
        {NFTCollections &&
          NFTCollections.map((collection, i) => (
            <Option value={collection.addrs} key={i}>
              {collection.name}
            </Option>
          ))}
      </Select>
    </>
  );
}
export default SearchItems;
