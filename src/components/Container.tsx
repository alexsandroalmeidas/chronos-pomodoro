type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className='container-fluid'>
      <div className='container'>
        <div className='content'>{children}</div>
      </div>
    </div>
  );
}
