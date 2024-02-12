interface Params {
    width: number,
    height: number,
    color: string
}

export default function XIcon({ width = 50, height = 50, color }: Params) {
    return (<svg fill={color} width={width} height={height} viewBox={'0 0 256 256'}>
        <path d='M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z' />
    </svg>)
}