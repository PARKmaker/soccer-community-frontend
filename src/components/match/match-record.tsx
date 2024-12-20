import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';
import useWindowSize from '@/hooks/use-window-size';
import Box from '@/components/common/box';
import { TGameDetails } from '@/types/schedules';
import Formation from '@/components/match/formation/formation';
import BoxHeading from '@/components/common/box-heading';
import LineupTable from '@/components/match/lineup/lineup-table';
import MatchRecordCategory from '@/components/match/match-record-category';
// import MomVote from '@/components/match/mom-vote';
// import OpenTalk from '@/components/match/open-talk';
import MatchRecordTab from '@/components/match/match-record-tab';
// import MatchSelectTeamButton from '@/components/match/match-select-team-button';
// import TableContainer from '@/components/common/table/table-container';
// import PlayerRankTable from '@/components/player-rank/player-rank-table';

export type TVoteInfo = {
  id: string;
  name: string;
  score: number;
};

type MatchRecordProps = TGameDetails;

export default function MatchRecord({
  homePlayers,
  awayPlayers,
  homeFormation,
  awayFormation,
  homeLogo,
  awayLogo,
  bookings,
  substitutions,
  homeStatistics,
  awayStatistics,
  homeBenchPlayers,
  awayBenchPlayers,
  // home,
  // away,
}: MatchRecordProps) {
  // Todo: 경기 상세 정보 패스수, 골 수 등등 데이터가 없어서 추후에 적용 필요
  const tabMapper = {
    // mom: <MomVote />,
    schedule: (
      <MatchRecordCategory awayStatistics={awayStatistics} homeStatistics={homeStatistics} />
    ),
    // talk: (
    //   <div className="">
    //     <OpenTalk />
    //   </div>
    // ),
  };

  const searchParams = useSearchParams();
  const { width } = useWindowSize();
  const tab = searchParams.get('tab') || 'schedule';

  // const [isHomeSelect, setIsHomeSelect] = useState(true);

  useEffect(() => {
    // xl 사이즈 넘어가면 aside에 오픈톡컴포넌트가 생기도록 구현(트릭)
    // 오픈톡 컴포넌트가 두개 생기는 상황이라 렌더링에 악영향이 있을 듯.
    // Todo: xl 사이즈 미만에서는 openTalk을 없애거나 팝업으로 구현하는걸 고려 (네이버는 아에 없앰)

    if (width && width > 1024 && tab !== 'mom') {
      // 상세 페이지 이동시 웹 환경이면 자동으로 url 파라미터값이 schedule로 설정되는 문제
      // 파라미터를 없애는 방법으로 수정
      history.replaceState({}, '', location.pathname);
    }
  }, [tab, width]);

  if (
    !homeFormation ||
    !awayFormation ||
    !awayPlayers ||
    !homePlayers ||
    !homeBenchPlayers ||
    !awayBenchPlayers
  ) {
    return <div className="text-lg">경기 시작 30분전에 라인업과 포메이션 정보가 나옵니다.</div>;
  }

  return (
    <>
      <Box className="h-full px-0 sm:gap-4">
        <MatchRecordTab tab={tab} />
        <hr />
        <div className="flex-all-center mb-2 h-[30px] w-full gap-[110px]">
          <Image alt="홈 로고" className="h-6 w-6" height={16} src={homeLogo} width={16} />
          <Image alt="원정 로고" className="h-6 w-6" height={16} src={awayLogo} width={16} />
        </div>
        {tabMapper[tab as keyof typeof tabMapper]}
      </Box>
      <Box>
        <BoxHeading hTagType="h3">포메이션</BoxHeading>
        <Formation
          awayFormation={awayFormation}
          awayLogo={awayLogo}
          homeFormation={homeFormation}
          homeLogo={homeLogo}
        />
      </Box>

      <Box>
        <BoxHeading hTagType="h3">라인업</BoxHeading>
        <LineupTable
          awayBenchPlayers={awayBenchPlayers}
          awayLogo={awayLogo}
          awayPlayers={awayPlayers}
          bookings={bookings}
          homeBenchPlayers={homeBenchPlayers}
          homeLogo={homeLogo}
          homePlayers={homePlayers}
          substitutions={substitutions}
        />
      </Box>

      {/*<Box>*/}
      {/*  <ul className="relative flex overflow-hidden rounded-lg border bg-hover">*/}
      {/*    <li className="relative z-10 min-w-0 flex-1 text-center">*/}
      {/*      <MatchSelectTeamButton*/}
      {/*        isSelected={isHomeSelect}*/}
      {/*        logoSrc={homeLogo}*/}
      {/*        onClick={() => setIsHomeSelect(true)}*/}
      {/*        team={home}*/}
      {/*      />*/}
      {/*    </li>*/}
      {/*    <li className="relative z-10 min-w-0 flex-1 text-center">*/}
      {/*      <MatchSelectTeamButton*/}
      {/*        isSelected={!isHomeSelect}*/}
      {/*        logoSrc={awayLogo}*/}
      {/*        onClick={() => setIsHomeSelect(false)}*/}
      {/*        team={away}*/}
      {/*      />*/}
      {/*    </li>*/}
      {/*  </ul>*/}
      {/*  <TableContainer isMatch={true}>*/}
      {/*    <PlayerRankTable isMatch={true} />*/}
      {/*  </TableContainer>*/}
      {/*</Box>*/}
    </>
  );
}
