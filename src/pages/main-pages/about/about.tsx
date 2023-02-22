import { Typography } from '@mui/material';
import { PageBlock, PageContainerWrapper } from '@page/main-pages/common/common.styles';

const AboutPage = () => (
  <>
    <PageContainerWrapper>
      <PageBlock>
        <Typography component="h1" variant="h4">
          Joujou Application
        </Typography>
        <Typography>pronunciation /ʒu.ʒu/, from french translated as a toy; a plaything</Typography>
        <Typography>
          Created for your own pleasure, a kind of testing ground where you can try or save some stuff.
        </Typography>
      </PageBlock>
    </PageContainerWrapper>
  </>
);

export default AboutPage;
