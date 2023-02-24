import { Scroll } from '@component/scroll/scroll';
import { Typography } from '@mui/material';
import { PageBlock, PageContainerWrapper } from '@page/main-pages/common.styles';

const AboutPage = () => (
  <Scroll>
    <PageContainerWrapper>
      <PageBlock>
        <Typography component="h1" variant="h4">
          Joujou Application
        </Typography>
        <Typography paddingBottom="16px">
          pronunciation /ʒu.ʒu/, from french translated as a toy; a plaything
        </Typography>
        <Typography paddingBottom="16px" textAlign="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel augue in justo tincidunt commodo eget at
          neque. Integer volutpat lectus a metus imperdiet, ut lacinia tortor convallis. Cras id erat interdum, luctus
          enim a, interdum sapien. Duis hendrerit erat a eros sagittis, vitae semper dui iaculis. Donec egestas velit
          sed enim bibendum efficitur. Duis laoreet varius neque eget lobortis. Nam ut blandit turpis, vitae ultrices
          nulla. Cras at tempus orci. Nam maximus purus ac vehicula porttitor. Nulla pretium molestie enim, cursus
          porttitor neque suscipit in.
        </Typography>
        <Typography paddingBottom="16px" textAlign="justify">
          Ut et lacinia eros. Ut mattis ornare purus, sit amet placerat quam feugiat a. Pellentesque imperdiet, metus
          non dictum facilisis, nibh diam efficitur neque, non tempor arcu turpis vitae velit. In eget leo in est
          sodales scelerisque. Aenean risus nisl, sagittis vitae pretium in, tristique et elit. Morbi sit amet dolor in
          enim rutrum consequat. Aliquam at mi sed libero mollis sagittis sed in mauris. Aenean tempus viverra velit et
          euismod. Vivamus nisl metus, sodales ut ex sed, dictum venenatis dui. Maecenas tincidunt rutrum laoreet.
        </Typography>
        <Typography paddingBottom="16px" textAlign="justify">
          Cras convallis mi nec lorem lobortis pharetra. Pellentesque eu augue ullamcorper, efficitur erat id, rhoncus
          dolor. Aenean quam augue, iaculis at viverra vitae, tristique eu tortor. Ut ullamcorper condimentum tincidunt.
          Vestibulum sed lobortis nulla, eu mattis velit. Pellentesque ultricies ultrices arcu, vel euismod nulla
          scelerisque a. Pellentesque faucibus tortor augue, sed mollis libero luctus tempus. Suspendisse vel elit
          sollicitudin, sodales massa pellentesque, laoreet felis. Nulla ornare ornare neque eget vestibulum. Curabitur
          ligula velit, mollis ut dignissim sit amet, elementum molestie velit. Aenean eget metus fringilla, eleifend
          nunc a, posuere diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Mauris sollicitudin arcu vel efficitur consectetur. Proin porta eros vel sagittis sollicitudin.
          Pellentesque at bibendum nulla.
        </Typography>
        <Typography paddingBottom="16px" textAlign="justify">
          Quisque vestibulum ut purus at ornare. Suspendisse et tortor auctor, fermentum leo nec, pulvinar nisi. Sed
          efficitur tortor a nulla commodo efficitur sed maximus urna. In molestie enim urna, et ullamcorper massa
          tempus a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet posuere nibh. Aenean
          dapibus nisi massa, aliquet feugiat purus efficitur et. Etiam molestie dapibus orci in iaculis. In commodo vel
          lectus ut tincidunt. Suspendisse vehicula dui ut ante tincidunt, quis tincidunt eros hendrerit.
        </Typography>
        <Typography paddingBottom="16px" textAlign="justify">
          Nulla id nisl nibh. Nunc aliquam lectus eu sem rhoncus, sed laoreet massa sodales. Pellentesque malesuada
          aliquam sem, in laoreet nulla varius eu. Maecenas non suscipit eros. Maecenas id odio mollis, semper turpis
          sit amet, rhoncus ante. Integer imperdiet nibh ut ante porta placerat. Fusce consequat purus id sapien
          sollicitudin euismod. Etiam fringilla, turpis vitae scelerisque cursus, metus tortor efficitur lectus, vel
          tempus tellus nibh tempor libero. Quisque laoreet vitae diam ac vehicula. Fusce maximus dapibus erat, vel
          euismod nisi pellentesque non. Maecenas consectetur mi vel arcu feugiat facilisis. Aliquam erat volutpat.
        </Typography>
      </PageBlock>
    </PageContainerWrapper>
  </Scroll>
);

export default AboutPage;
