import { useState } from "react";
import menuIcon from "../../assets/images/icons/menu.svg";

import { Header } from "../../components/Header";
import { CategoriesList } from "./components/CategoriesList";
import { ProductsList } from "./components/ProductsList";
import { Container, Tab } from "./style";

export function Menu() {
  const [selectedTab, setSelectedTab] = useState<"PRODUCTS" | "CATEGORIES">(
    "PRODUCTS"
  );

  return (
    <Container>
      <Header
        icon={menuIcon}
        title="Cardápio"
        description="Gerencie os produtos do seu estabelecimento"
      />

      <div className="content">
        <div className="tabs">
          <Tab
            active={selectedTab === "PRODUCTS"}
            onClick={() => setSelectedTab("PRODUCTS")}
          >
            Produtos
          </Tab>
          <Tab
            active={selectedTab === "CATEGORIES"}
            onClick={() => setSelectedTab("CATEGORIES")}
          >
            Categorias
          </Tab>
        </div>

        {selectedTab === "PRODUCTS" ? <ProductsList /> : <CategoriesList />}
      </div>
    </Container>
  );
}
