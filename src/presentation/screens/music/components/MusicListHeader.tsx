import { Image } from "react-native";

interface MusicListHeaderProps {
  width: number;
}

const MusicListHeader = ({ width }: MusicListHeaderProps) => {
  return (
    <Image
      style={{
        width: width,
        height: (width / 360) * 296,
        // aspectRatio를 쓰면 안된다. 알 수 없는 빈공간이 생긴다.
      }}
      source={require("@assets/png/music_detail.png")}
      // cover: 비율을 유지하면서 영역을 꽉 채움 (잘릴 수 있음)
      // contain: 비율을 유지하면서 전체가 보이게 함
      // stretch: 비율울 무시하고 영역에 딱 맞게 늘림 (비율 깨짐 주의)
      resizeMode="stretch"
    />
  );
};

export default MusicListHeader;
