import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function BreadcrumbElement() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/forumDiskusi">Forum Diskusi</Breadcrumb.Item>
      <Breadcrumb.Item active> detail forum diskusi</Breadcrumb.Item>
    </Breadcrumb>
  );
}
