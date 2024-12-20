import { Suspense } from 'react';
import Match from '@/components/match/match';
import Loading from '@/app/loading';

type MatchPageProps = {
  params: {
    leagueGameId: string;
  };
};

export default function MatchPage({ params }: MatchPageProps) {
  const { leagueGameId } = params;

  return (
    <section className="relative mx-auto flex w-full flex-col gap-2 lg:gap-4">
      <Suspense fallback={<Loading />}>
        <Match leagueGameId={leagueGameId} />
      </Suspense>
    </section>
  );
}
