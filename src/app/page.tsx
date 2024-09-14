import Box from '@/components/common/box';
import LaligaSchedule from '@/components/home/laliga-schedule';
import PremierSchedule from '@/components/home/premier-schedule';
import Container from '@/components/common/container';
import HomePost from '@/components/home/home-post';
import HomeRank from '@/components/home/home-rank';

export default async function HomePage() {
  return (
    <Container>
      <Box>
        <HomePost />
      </Box>
      <Box>
        <PremierSchedule />
        <LaligaSchedule />
      </Box>
      <Box>
        <HomeRank />
      </Box>
    </Container>
  );
}
