import styled from '@emotion/styled';
import Image from 'next/image';

const Button = styled.button`
  width: 60px;
  height: 60px;
`;

export default function ShareKakao() {
  // 배포한 자신의 사이트
  const realUrl = 'https://zoozup.netlify.app/';
  // 로컬 주소 (localhost 3000 같은거)
  const resultUrl = 'http:localhost:3000';

  const shareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '최애의 효능',
        description: '내 최애를 사랑해야하는 이유를 알려줄게!',
        imageUrl:
          'https://ajar-feast-3bd.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe7b9d9c3-b771-41b0-8b29-a4e57a4f7d5f%2Fffb08d74-574a-4d2a-84e9-3b82e7f6808e%2F%25E1%2584%258F%25E1%2585%25A1%25E1%2584%258F%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25A9_%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25BC%25E1%2584%258F%25E1%2585%25B3_%25E1%2584%258A%25E1%2585%25A5%25E1%2586%25B7%25E1%2584%2582%25E1%2585%25A6%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AF.png?table=block&id=0e145773-e9d6-459e-aed6-845a064116c8&spaceId=e7b9d9c3-b771-41b0-8b29-a4e57a4f7d5f&width=2000&userId=&cache=v2',
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: '나도 테스트 하러가기',
          link: {
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

  return (
    <>
      <Button onClick={shareKakao}>
        <Image
          width={60}
          height={60}
          src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
          alt="카카오톡 공유 보내기 버튼"
        />
      </Button>
    </>
  );
}
