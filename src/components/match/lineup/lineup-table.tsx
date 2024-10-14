import { TGameBooking, TGamePlayer, TGameSubstitution } from '@/types/schedules';
import LineupTableThead from '@/components/match/lineup/lineup-table-thead';
import { generateLineupArray, generateSubLineupArray } from '@/components/match/match.utils';
import LineupTableTbody from '@/components/match/lineup/lineup-table-tbody';
import SubLineupTableTbody from '@/components/match/lineup/sub-lineup-table-tbody';

type LineupTableProps = {
  homePlayers: TGamePlayer[];
  awayPlayers: TGamePlayer[];
  awayLogo: string;
  homeLogo: string;
  bookings: TGameBooking[];
  substitutions: TGameSubstitution[];
};

export default function LineupTable({
  homePlayers,
  awayPlayers,
  awayLogo,
  homeLogo,
  bookings,
  substitutions,
}: LineupTableProps) {
  const { homeLineup, awayLineup } = generateLineupArray(
    homePlayers,
    awayPlayers,
    bookings,
    substitutions,
  );

  const { homeSubLineup, awaySubLineup } = generateSubLineupArray(substitutions, bookings);

  return (
    <div className="relative overflow-hidden pb-[4px]">
      <div className="mb-4 text-center font-semibold">선발 라인업</div>
      <table className="table w-full table-fixed">
        <LineupTableThead awayLogo={awayLogo} homeLogo={homeLogo} />
        <LineupTableTbody awayLineup={awayLineup} homeLineup={homeLineup} />
      </table>
      <div className="mb-4 mt-6 text-center font-semibold">교체 출전</div>
      <table className="table w-full table-fixed">
        <SubLineupTableTbody awayLineup={awaySubLineup} homeLineup={homeSubLineup} />
      </table>
    </div>
  );
}