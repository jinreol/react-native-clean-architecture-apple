import { useAppTheme } from "@presentation/hooks/useAppTheme";
import { View, StyleSheet, Text, ScrollView, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NewsSearch from "@presentation/screens/news/components/NewsSearch";
import NewsTitle from "@presentation/screens/news/components/NewsTitle";
import { Theme } from "@core/theme/theme";

const NewsScreen = () => {
  const { theme } = useAppTheme();
  // 테마를 인자로 전달하여 스타일 객체 생성
  const styles = createStyles(theme);

  // 현재 기기의 안전 영역 인셋(Insets) 가져오기
  const insets = useSafeAreaInsets();

  return (
    <FlatList
      style={{
        backgroundColor: theme.color.background,
        paddingTop: insets.top > 0 ? insets.top : 20, // 노치가 있으면 노치만큼, 없으면 기본값 20
        paddingBottom: insets.bottom, // 하단 홈 바 영역 대응
      }}
      ListHeaderComponent={
        <View style={{ marginBottom: 16 }}>
          <NewsSearch />
          <NewsTitle />
        </View>
      }
      data={newsList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text
            style={[theme.typography.caption, { color: theme.color.primary }]}
          >
            {item.ago}
          </Text>
          <Text
            style={[
              theme.typography.h6,
              { color: theme.color.main, marginTop: 12 },
            ]}
          >
            {item.title}
          </Text>
          <Text
            style={[
              theme.typography.body2,
              { color: theme.color.main, marginTop: 12 },
            ]}
          >
            {item.description}
          </Text>
        </View>
      )}
      // 아이템 사이의 간격을 정의하는 컴포넌트
      ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
    ></FlatList>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    card: {
      backgroundColor: theme.color.background,
      borderRadius: 8,
      padding: 16,
      marginHorizontal: 8,

      // 1. iOS 그림자 설정 (제공하신 3개 층을 평균 내어 합침)
      // alpha 12%는 opacity 0.12, blur 12는 radius 12 정도로 변환
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 }, // y값 반영
      shadowOpacity: 0.12, // 가장 강한 층의 투명도
      shadowRadius: 8, // 평균 blur 값

      // 2. Android 그림자 설정 (elevation은 blur에 비례하게 설정)
      // elevation 값은 직접 보면서 조정해야 하지만, 보통 4~8 사이가 적당합니다.
      elevation: 4,
    },
  });

export default NewsScreen;

interface News {
  id: string;
  ago: string;
  title: string;
  description: string;
}

const newsList: News[] = [
  {
    id: "a534d727-7bbf-4e15-88e6-055afb475c0e",
    ago: "1 hour ago",
    title: "Asia's clean energy ambitions",
    description:
      "When the top app bar scrolls, its elevation above other elements becomes apparent. The top app bar disappears upon scrolling up.",
  },
  {
    id: "06d1711b-c7a8-4dae-8366-fab0669e6e9e",
    ago: "2 hours ago",
    title: "Bottom navigation actions",
    description:
      "Tapping a bottom navigation destination results in one of the following: It takes the user to the screen associated with it.",
  },
  {
    id: "5633d00a-dcc9-4dde-b2dd-dc5d04d2a405",
    ago: "3 hours ago",
    title: "Global AI policy summit 2024",
    description:
      "Policymakers gathered to discuss frameworks for responsible AI development and cross-border regulation of emerging technologies.",
  },
  {
    id: "93103f69-b8a6-423d-b2c3-be1d9bc8c294",
    ago: "4 hours ago",
    title: "Tech giants face antitrust scrutiny",
    description:
      "Regulators launched investigations into monopolistic practices among major technology corporations in search and advertising markets.",
  },
  {
    id: "d8455fef-ba3c-41cf-94a0-f8402081959c",
    ago: "5 hours ago",
    title: "Climate change reshapes agriculture",
    description:
      "Rising temperatures and shifting rainfall patterns are forcing farmers to adapt crop selections and irrigation strategies.",
  },
  {
    id: "7d0178f7-5c88-4b24-835e-c7608c7c6fe5",
    ago: "6 hours ago",
    title: "Electric vehicles surge in Southeast Asia",
    description:
      "Sales of battery-powered vehicles have tripled in the region as governments offer tax incentives and charging infrastructure grows.",
  },
  {
    id: "28e0f944-b25a-4e5e-8da8-2e8beefd3b44",
    ago: "12 hours ago",
    title: "South Korea leads semiconductor exports",
    description:
      "The nation maintained its position as the world's largest exporter of memory chips and display panels despite global headwinds.",
  },
  {
    id: "32b93e2b-2764-4f9c-be71-39e126cb9c39",
    ago: "1 day ago",
    title: "Japan's aging population crisis",
    description:
      "With birth rates declining and life expectancy rising, the country faces mounting pressure on social welfare and pension systems.",
  },
  {
    id: "42c97cc2-1db3-4f8a-861b-7e0809b8b99e",
    ago: "2 days ago",
    title: "China's real estate market recovery",
    description:
      "Property developers are beginning to resume stalled projects as government support measures and loan restructuring take effect.",
  },
  {
    id: "eb11eb96-ce10-43dc-ab65-c6453bf726c3",
    ago: "3 days ago",
    title: "India's digital payment revolution",
    description:
      "Unified payment interfaces have enabled hundreds of millions of citizens to transact digitally, including in rural and remote areas.",
  },
  {
    id: "6c05277a-8c52-422b-8b70-bd07d6eb31a1",
    ago: "1 hour ago",
    title: "Remote work transforms city centers",
    description:
      "Suburban office parks are seeing a resurgence as companies adopt hybrid policies, while urban core demand remains uncertain.",
  },
  {
    id: "f1c6f5c9-ed20-464f-8985-f88de340e441",
    ago: "2 hours ago",
    title: "Cybersecurity threats on the rise",
    description:
      "Nation-state actors and criminal organizations are increasingly targeting critical infrastructure and financial institutions.",
  },
  {
    id: "15481378-a30a-45ba-a5bc-5a59d9ce3e46",
    ago: "3 hours ago",
    title: "Quantum computing breakthrough announced",
    description:
      "Researchers demonstrated error correction at scale, a key milestone on the path to practical fault-tolerant quantum computers.",
  },
  {
    id: "dce9fc1a-6089-438a-bd68-0321a66c477c",
    ago: "4 hours ago",
    title: "Space tourism enters new era",
    description:
      "Private operators launched the first commercial suborbital flights, signaling a new chapter in civilian access to space.",
  },
  {
    id: "9fb3abf6-2c39-4b9b-8f9a-e66777473026",
    ago: "5 hours ago",
    title: "Biodiversity loss accelerates worldwide",
    description:
      "Scientists warned that the rate of species extinction is now hundreds of times higher than natural background rates.",
  },
  {
    id: "2bd004ce-f0f2-4ea3-b13b-a1c902607900",
    ago: "6 hours ago",
    title: "Central banks raise interest rates",
    description:
      "Monetary authorities signaled continued tightening as core inflation remains sticky in services and housing segments.",
  },
  {
    id: "5a0739e1-4d3a-4472-bc05-bee7c20ff465",
    ago: "12 hours ago",
    title: "Supply chain disruptions continue",
    description:
      "Port congestion and raw material shortages continue to affect manufacturers in electronics, automotive, and consumer goods.",
  },
  {
    id: "c6e8983a-bbe6-41ba-99bc-581005a86b22",
    ago: "1 day ago",
    title: "Renewable energy investment hits record",
    description:
      "Global investment in solar, wind, and battery storage reached an all-time high, surpassing fossil fuel investment for the first time.",
  },
  {
    id: "9dd4e6b9-c43b-4e34-a810-d11d1e6dafd5",
    ago: "2 days ago",
    title: "Social media regulation debate heats up",
    description:
      "Legislators debated whether platforms should be held liable for algorithmic amplification of harmful and misleading content.",
  },
  {
    id: "9e30f6c0-0e88-4578-b036-737a98b5c15b",
    ago: "3 days ago",
    title: "Healthcare AI saves lives",
    description:
      "Machine learning tools are enabling faster diagnosis of rare diseases and personalizing treatment plans for cancer patients.",
  },
  {
    id: "74bad255-7627-484a-a033-80fa9a05d1c8",
    ago: "1 hour ago",
    title: "Smart city projects expand globally",
    description:
      "Municipalities are deploying sensors, data analytics, and automation to optimize traffic, energy, and waste management systems.",
  },
  {
    id: "89aed8fb-3828-47e5-bde4-33bbaa1a0975",
    ago: "2 hours ago",
    title: "Food security concerns mount",
    description:
      "A combination of conflict, climate shocks, and export restrictions has left over 700 million people facing acute food insecurity.",
  },
  {
    id: "8e544611-6233-42d3-9f18-87f3b24964ed",
    ago: "3 hours ago",
    title: "Water scarcity threatens millions",
    description:
      "Groundwater depletion and contamination are creating humanitarian crises in parts of South Asia, the Middle East, and Africa.",
  },
  {
    id: "abce7cab-b3c8-47a8-918d-75c89d98332f",
    ago: "4 hours ago",
    title: "Arctic ice melting at record pace",
    description:
      "Summer sea ice extent hit a new minimum, accelerating feedback loops that are warming the region four times faster than the global average.",
  },
  {
    id: "004d98a0-151e-4dbc-ad5b-94c5bc0f9d46",
    ago: "5 hours ago",
    title: "Nuclear energy sees a comeback",
    description:
      "Several countries announced plans to extend the lifespan of existing reactors and build new ones to meet decarbonization targets.",
  },
  {
    id: "3f5f942d-ebde-4db9-a5ba-07bd4521bb89",
    ago: "6 hours ago",
    title: "5G rollout accelerates in Asia",
    description:
      "Carriers are completing dense urban deployments while extending coverage to suburban and rural areas with mid-band spectrum.",
  },
  {
    id: "16a54d1b-4ab9-4633-9238-9cf93e6bbcf5",
    ago: "12 hours ago",
    title: "Streaming wars intensify globally",
    description:
      "Studios and tech platforms are spending billions to attract subscribers as growth slows in saturated developed markets.",
  },
  {
    id: "714ce02e-ad5e-4d47-bf3e-5f80b62908d2",
    ago: "1 day ago",
    title: "E-commerce reshapes retail landscape",
    description:
      "Online retail's share of total sales continues to grow, but returns, logistics costs, and profitability remain persistent challenges.",
  },
  {
    id: "bd9bd283-85af-42d6-8942-7193132a0351",
    ago: "2 days ago",
    title: "Urban farming gains momentum",
    description:
      "Hydroponic and vertical farms are supplying fresh produce to urban consumers while using a fraction of traditional water inputs.",
  },
  {
    id: "4e9f5088-7158-442a-91dd-2a0ae387540a",
    ago: "3 days ago",
    title: "Fintech disrupts traditional banking",
    description:
      "Mobile-first neobanks are gaining market share from incumbents by offering lower fees, faster service, and embedded financial products.",
  },
  {
    id: "0e160472-d0ad-4e12-900e-5271f0e46e60",
    ago: "1 hour ago",
    title: "Mental health crisis among youth",
    description:
      "Rates of anxiety, depression, and eating disorders among adolescents have surged, prompting calls for school-based interventions.",
  },
  {
    id: "c815dcf2-2e01-481e-93a2-03aad1624c19",
    ago: "2 hours ago",
    title: "Autonomous vehicles face new hurdles",
    description:
      "Regulatory uncertainty, liability questions, and edge-case safety failures have slowed the commercial rollout of self-driving taxis.",
  },
  {
    id: "c1923bed-1dc6-4b8c-a304-318693cc1022",
    ago: "3 hours ago",
    title: "Digital currencies reshape finance",
    description:
      "Central bank digital currencies are in pilot phases in over 100 countries, raising questions about privacy and financial inclusion.",
  },
  {
    id: "602c3e7e-6820-46be-bd4f-03c8cdf358d9",
    ago: "4 hours ago",
    title: "Education tech boom post-pandemic",
    description:
      "Adaptive learning platforms and AI tutors are helping students catch up on learning losses from pandemic-era school closures.",
  },
  {
    id: "af3429fe-601b-46e3-b752-e1b75c655d3d",
    ago: "5 hours ago",
    title: "Tourism rebounds in Southeast Asia",
    description:
      "International arrivals are approaching pre-pandemic levels, with budget carriers and visa liberalization driving regional growth.",
  },
  {
    id: "66eccbde-28d0-448e-80f6-36a353a8457f",
    ago: "6 hours ago",
    title: "Carbon capture tech advances",
    description:
      "Direct air capture facilities and enhanced weathering projects are scaling up, but costs remain orders of magnitude above targets.",
  },
  {
    id: "b467d85f-22f5-49f4-b9d2-b3860ae7c2ba",
    ago: "12 hours ago",
    title: "Inflation eases in major economies",
    description:
      "Falling energy prices and improving supply chains have allowed central banks to pause rate hikes in several major economies.",
  },
  {
    id: "50a62301-0273-4e89-bee6-abccddc0df67",
    ago: "1 day ago",
    title: "Housing market cools globally",
    description:
      "Rising mortgage rates and falling buyer sentiment have led to price declines in previously hot markets across North America and Europe.",
  },
  {
    id: "3d4a1356-eaa0-4df1-852b-84b07897d5ae",
    ago: "2 days ago",
    title: "Chip shortage impacts auto industry",
    description:
      "Automakers are redesigning inventory models and investing in domestic chip supply to reduce exposure to single-source dependencies.",
  },
  {
    id: "7a45a278-5d13-4849-8076-885fdc65d711",
    ago: "3 days ago",
    title: "Metaverse investment slows",
    description:
      "After years of hype, enterprise adoption of virtual and augmented reality platforms has fallen short of optimistic projections.",
  },
  {
    id: "433d1f1d-a890-4c30-84ae-7abbf213b0a4",
    ago: "1 hour ago",
    title: "AI regulation frameworks proposed",
    description:
      "Governments are drafting legislation that would require algorithmic transparency, bias audits, and human oversight for high-risk AI systems.",
  },
  {
    id: "a92d7517-1a50-4491-b641-921964a9c7fc",
    ago: "2 hours ago",
    title: "Green hydrogen economy emerging",
    description:
      "Electrolyzers powered by surplus renewable energy are being deployed to produce zero-emission hydrogen for industrial applications.",
  },
  {
    id: "5dd1e50a-50a5-4744-8b38-64e7e97d8e8c",
    ago: "3 hours ago",
    title: "Ocean plastic cleanup scales up",
    description:
      "Nonprofit and commercial cleanup operations removed thousands of tonnes of plastic from rivers and coastal waters this year.",
  },
  {
    id: "c62d2ea3-f2dd-4626-adc2-6607b997199c",
    ago: "4 hours ago",
    title: "Food tech startups attract funding",
    description:
      "Alternative protein companies secured substantial funding to scale fermentation-based and cell-cultivated meat production.",
  },
  {
    id: "2c4ebe0a-6031-469e-9ede-d1fe117f124e",
    ago: "5 hours ago",
    title: "Telemedicine adoption surges",
    description:
      "Virtual consultations now account for over 30 percent of outpatient visits in several countries, reducing pressure on physical clinics.",
  },
  {
    id: "a09ea8ee-f4c9-49ba-93db-ae0146da6501",
    ago: "6 hours ago",
    title: "Robotics transforms manufacturing",
    description:
      "Collaborative robots are working alongside human workers in assembly, packaging, and quality inspection roles at record scale.",
  },
  {
    id: "5b34fa03-b16d-4856-b4db-2d45d419c93a",
    ago: "12 hours ago",
    title: "Gene editing ethics debated",
    description:
      "Scientists and ethicists are debating governance frameworks for germline editing following controversial experiments in several countries.",
  },
  {
    id: "a942e118-8300-47a9-8b09-04d5d1aafdb9",
    ago: "1 day ago",
    title: "Aging workforce challenges employers",
    description:
      "Employers are redesigning roles and extending career pathways to retain experienced workers as youth labor supply tightens.",
  },
  {
    id: "7ff9a7d2-c1b0-49cd-a511-5de3487d3a92",
    ago: "2 days ago",
    title: "Infrastructure investment grows",
    description:
      "Governments are allocating record budgets to upgrade roads, bridges, ports, and rail networks aging past design lifespans.",
  },
  {
    id: "4256d9d4-c18a-4538-bdce-ad3140437d12",
    ago: "3 days ago",
    title: "Digital divide persists globally",
    description:
      "Remote communities are gaining connectivity through low-orbit satellite networks, unlocking access to education and commerce.",
  },
  {
    id: "f88a7c86-f1ce-4acc-a42b-0a04df5e79ef",
    ago: "1 hour ago",
    title: "Biosecurity measures tighten",
    description:
      "Exposure to microplastic particles has been confirmed in blood, lung tissue, and placentas, raising long-term health concerns.",
  },
  {
    id: "0aa61e02-08c0-4930-aeeb-d4e618aa3d7b",
    ago: "2 hours ago",
    title: "Urban mobility shifts to cycling",
    description:
      "Clinical trials of implantable chips demonstrated that patients with paralysis could control computers and robotic limbs with thought.",
  },
  {
    id: "6ee2b969-a78a-44e9-9660-b819b313f839",
    ago: "3 hours ago",
    title: "Corporate ESG reporting expands",
    description:
      "Controlled-environment agriculture facilities are supplying leafy greens and herbs to urban supermarkets year-round at competitive prices.",
  },
  {
    id: "d6417f6d-ada5-4cbd-bfe1-d4e11d9aa051",
    ago: "4 hours ago",
    title: "Microplastics found in human blood",
    description:
      "Stricter vehicle emission standards and industrial regulations have reduced particulate concentrations in many cities.",
  },
  {
    id: "9c281756-b5f8-44ba-af9b-30728a93d662",
    ago: "5 hours ago",
    title: "Brain-computer interface advances",
    description:
      "Actuaries warn that current contribution rates are insufficient to cover projected liabilities as retiree-to-worker ratios worsen.",
  },
  {
    id: "efe11bca-f07e-41d7-bbd6-01021a8920ba",
    ago: "6 hours ago",
    title: "Vertical farming scales up",
    description:
      "Platform workers are organizing across borders to push for minimum earnings guarantees, benefits, and algorithmic transparency.",
  },
  {
    id: "1da9aa17-533d-4e91-bbfa-2b4f1e00739e",
    ago: "12 hours ago",
    title: "Air quality improves in major cities",
    description:
      "Reduced summer sea ice has opened commercially viable trans-Arctic shipping lanes, cutting transit times between continents.",
  },
  {
    id: "f5e7204a-2730-4291-b105-772395d9e424",
    ago: "1 day ago",
    title: "Pension systems under pressure",
    description:
      "Demand for lithium, cobalt, and rare earth elements is intensifying scrutiny of mining practices and supply chain ethics.",
  },
  {
    id: "2ad47412-cdfb-43b1-bd6d-b5e14eaa1fff",
    ago: "2 days ago",
    title: "Gig economy workers seek rights",
    description:
      "Broadband delivered via low-earth-orbit constellations is now commercially available in remote areas across six continents.",
  },
  {
    id: "fe924807-db36-44f5-aa8a-1560911146e3",
    ago: "3 days ago",
    title: "Arctic shipping routes open up",
    description:
      "Battery electric regional aircraft completed certification testing, promising zero-emission short-haul flights within the decade.",
  },
  {
    id: "9fd0a277-1e4f-46d1-8c17-b8fda2bc2576",
    ago: "1 hour ago",
    title: "Rare earth mining controversy",
    description:
      "Marine biologists are using coral fragments, 3D-printed structures, and assisted evolution to rebuild degraded reef systems.",
  },
  {
    id: "4163d864-148e-44b8-9e4a-fd6efde4fb38",
    ago: "2 hours ago",
    title: "Satellite internet expands coverage",
    description:
      "Several trading blocs introduced levies on imports from countries without equivalent carbon pricing mechanisms.",
  },
  {
    id: "781a6d6b-de7a-4856-9a69-3121fea8baf9",
    ago: "3 hours ago",
    title: "Electric aviation takes flight",
    description:
      "Migration of enterprise workloads to hyperscale providers continued, with multi-cloud strategies becoming standard practice.",
  },
  {
    id: "055e2cb1-34ba-43a7-85af-26cbe937dcaf",
    ago: "4 hours ago",
    title: "Coral reef restoration efforts",
    description:
      "Generative AI writing assistants are being integrated into classrooms, prompting debate about academic integrity and critical thinking.",
  },
  {
    id: "7603874d-4dfb-473c-bf71-d9adf612f69a",
    ago: "5 hours ago",
    title: "Carbon border taxes implemented",
    description:
      "Reservoir levels at key hydroelectric facilities have fallen sharply, forcing grid operators to increase reliance on fossil fuel backup.",
  },
  {
    id: "fb8591e8-fa71-419e-a8e1-901e33bb7b1a",
    ago: "6 hours ago",
    title: "Cloud computing dominates enterprise",
    description:
      "Offshore wind installations broke capacity records as turbine sizes increased and floating foundation technology matured.",
  },
  {
    id: "b7ca9233-f1fd-4a00-b778-d3726ea29e9b",
    ago: "12 hours ago",
    title: "Language models reshape education",
    description:
      "Regenerative agriculture practices are gaining adoption as evidence links soil carbon content to crop resilience and nutrient density.",
  },
  {
    id: "c1035cc5-06ce-453e-8265-3a2799474ecf",
    ago: "1 day ago",
    title: "Drought impacts hydropower output",
    description:
      "Utilities are deploying two-way communication and automation technology to balance variable renewable supply with demand.",
  },
  {
    id: "9d6b2a9c-4c4a-45b8-89cd-50abfc5017dd",
    ago: "2 days ago",
    title: "Offshore wind capacity doubles",
    description:
      "Storm surge modeling shows dozens of major coastal cities face inundation risk within decades under current emissions trajectories.",
  },
  {
    id: "42a6011c-efcb-4471-88e2-e575e7ec7bfa",
    ago: "3 days ago",
    title: "Soil health key to food security",
    description:
      "Export restrictions and sanctions are reshaping global trade flows, prompting companies to diversify supply chains and partners.",
  },
  {
    id: "05dd411e-342f-47b9-8e86-1fb671156399",
    ago: "1 hour ago",
    title: "Smart grid technology deployed",
    description:
      "Nurse and physician shortages are worsening as pandemic burnout, retirement waves, and training bottlenecks reduce workforce supply.",
  },
  {
    id: "9a918568-1bd7-4b48-a806-0665af934d18",
    ago: "2 hours ago",
    title: "Coastal cities face flooding risk",
    description:
      "After rapid initial growth, the category is maturing with major players consolidating and shifting focus to profitability.",
  },
  {
    id: "475d1b8d-2fa0-46e5-8800-a513be40671f",
    ago: "3 hours ago",
    title: "Geopolitical tensions disrupt trade",
    description:
      "Bus and truck operators are piloting hydrogen fuel cell powertrains for long-haul routes where battery weight is prohibitive.",
  },
  {
    id: "4d8a3b30-c402-4083-87c2-07b57c7ac466",
    ago: "4 hours ago",
    title: "Healthcare worker shortage deepens",
    description:
      "Companies are restructuring data collection, consent mechanisms, and retention policies to comply with expanding privacy regulations.",
  },
  {
    id: "ad8b639a-0095-4337-8716-350619e5c45b",
    ago: "5 hours ago",
    title: "Plant-based meat market matures",
    description:
      "Decades of deferred maintenance have left road and bridge networks in critical condition across many developed economies.",
  },
  {
    id: "704bf90e-290a-4159-887a-583ffe29e1bc",
    ago: "6 hours ago",
    title: "Hydrogen fuel cells in transport",
    description:
      "Blending mandates and aviation fuel standards are driving investment in advanced biofuel refineries and feedstock supply.",
  },
  {
    id: "38236ea9-97d4-46e5-9da4-ef4af7955cf7",
    ago: "12 hours ago",
    title: "Privacy laws reshape data economy",
    description:
      "Hotter and drier conditions driven by climate change are extending fire seasons and expanding affected regions globally.",
  },
  {
    id: "fe2ddd3e-5f46-47e6-be3d-ff5670b88512",
    ago: "1 day ago",
    title: "Aging infrastructure needs investment",
    description:
      "Warming and CO2 absorption are reducing seawater pH, threatening shellfish, coral, and the broader marine food web.",
  },
  {
    id: "749be466-c7b1-4370-8010-63c20be1f3d1",
    ago: "2 days ago",
    title: "Biofuels gain policy support",
    description:
      "Impervious surfaces, reduced vegetation, and waste heat are raising temperatures in dense urban neighborhoods by several degrees.",
  },
  {
    id: "dfb907fb-ce15-457b-aa41-5c9822c78975",
    ago: "3 days ago",
    title: "Wildfires intensify worldwide",
    description:
      "Companies are redesigning products, packaging, and logistics for reuse, repair, and recyclability to reduce waste generation.",
  },
  {
    id: "cd2730ed-0884-46fb-9a47-647b8f6a0a4c",
    ago: "1 hour ago",
    title: "Ocean acidification threatens fisheries",
    description:
      "Startups are launching trackers, white noise devices, and coaching apps targeting the growing market for better sleep quality.",
  },
  {
    id: "7718c445-246b-46c1-9568-524f43d87111",
    ago: "2 hours ago",
    title: "Urban heat islands intensify",
    description:
      "Voluntary carbon markets are expanding but facing scrutiny over the quality, permanence, and additionality of offset credits.",
  },
  {
    id: "bfddfbbf-d3cf-4e0c-acd1-f0c8cf1ee905",
    ago: "3 hours ago",
    title: "Circular economy models expand",
    description:
      "Environmental groups and some nations are calling for a moratorium pending further study of ecosystem and sovereignty impacts.",
  },
  {
    id: "f8f0b42f-7d63-4a64-bda5-b4603f7d0872",
    ago: "4 hours ago",
    title: "Sleep technology market booms",
    description:
      "Health authorities warn that without new drug development and stewardship programs, common infections could become untreatable.",
  },
  {
    id: "4a7d75f4-efe0-4f09-95bf-5065bd3e404f",
    ago: "5 hours ago",
    title: "Carbon trading markets evolve",
    description:
      "Consumer smartwatches and patches can now monitor glucose, blood oxygen, stress, and cardiac rhythms continuously.",
  },
  {
    id: "ebfcf211-747b-4178-b6b0-1cad6587383c",
    ago: "6 hours ago",
    title: "Deep sea mining debate grows",
    description:
      "Improved lithium-ion and emerging solid-state chemistries are making grid-scale and vehicle storage economically attractive.",
  },
  {
    id: "bc8ff840-64b2-4d70-845c-c4e0a762ddf6",
    ago: "12 hours ago",
    title: "Antibiotic resistance crisis looms",
    description:
      "Precision spraying, crop monitoring, and automated seeding drones are reducing input costs for small and medium farms.",
  },
  {
    id: "387c822f-aec1-421a-b80e-a4de5719ad3c",
    ago: "1 day ago",
    title: "Wearable health monitors advance",
    description:
      "Over 50 countries now offer residency permits designed to attract remote workers seeking long-term stays abroad.",
  },
  {
    id: "5d1ec8ae-22ac-4a70-a79e-b2943dc387e6",
    ago: "2 days ago",
    title: "Battery storage costs plummet",
    description:
      "Image, video, and music generators are enabling new forms of creative expression while raising copyright and attribution questions.",
  },
  {
    id: "0276f54c-8f4f-46aa-8dfa-356e3e4d2807",
    ago: "3 days ago",
    title: "Agriculture drones see adoption",
    description:
      "High-resolution satellite data is being used to detect illegal logging, monitor wildlife populations, and track habitat loss.",
  },
  {
    id: "6b034be9-d3c2-48be-981c-1cf2cd90d1a0",
    ago: "1 hour ago",
    title: "Digital nomad visas proliferate",
    description:
      "Post-pandemic commuter habit changes prompted many cities to reverse cuts and reinvest in buses, subways, and light rail.",
  },
  {
    id: "50885a7f-90cf-4386-897e-8ade01e8d242",
    ago: "2 hours ago",
    title: "Creative AI tools transform design",
    description:
      "Libraries, museums, and archives are creating high-resolution digital replicas of artifacts, manuscripts, and historic sites.",
  },
  {
    id: "fad055a7-712a-433a-ac06-744553a195b7",
    ago: "3 hours ago",
    title: "Satellite imagery aids conservation",
    description:
      "Student-led campaigns are influencing corporate climate commitments, campus divestment decisions, and electoral outcomes.",
  },
  {
    id: "89ccc9d2-a75e-4189-850a-2f90a2a170f5",
    ago: "4 hours ago",
    title: "Public transit investment returns",
    description:
      "Mobile banking, micro-insurance, and nano-loans are reaching smallholder farmers and micro-entrepreneurs in underserved markets.",
  },
  {
    id: "e744d792-24d1-41e9-a946-9e03a78d54c1",
    ago: "5 hours ago",
    title: "Cultural heritage digitization expands",
    description:
      "City planners are mandating parks, street trees, green roofs, and pocket gardens to improve well-being and manage heat and water.",
  },
  {
    id: "e157a2ec-cbec-44ad-aadb-db2a76ac1f5a",
    ago: "6 hours ago",
    title: "Youth activism drives policy change",
    description:
      "Genomic sequencing, biomarker testing, and AI diagnostics are enabling treatment plans tailored to individual patient profiles.",
  },
  {
    id: "d2750565-ef2c-497e-ab57-b69847f63880",
    ago: "12 hours ago",
    title: "Inclusive finance reaches rural areas",
    description:
      "When the top app bar scrolls, its elevation above other elements becomes apparent. The top app bar disappears upon scrolling up.",
  },
  {
    id: "9a8d05f7-184a-4111-94c6-64ec006a93e1",
    ago: "1 day ago",
    title: "Urban green spaces prioritized",
    description:
      "Tapping a bottom navigation destination results in one of the following: It takes the user to the screen associated with it.",
  },
  {
    id: "d41ec8b1-7925-41be-b6c8-218253a0f579",
    ago: "2 days ago",
    title: "Personalized medicine advances rapidly",
    description:
      "Policymakers gathered to discuss frameworks for responsible AI development and cross-border regulation of emerging technologies.",
  },
  {
    id: "d76fbb15-aa18-4e28-a646-22d18350cfb7",
    ago: "3 days ago",
    title: "Asia's clean energy ambitions",
    description:
      "Regulators launched investigations into monopolistic practices among major technology corporations in search and advertising markets.",
  },
];
