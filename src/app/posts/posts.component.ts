import { Component, OnInit, ViewChild } from '@angular/core';
import { PostsService } from '../posts.service';
import { PostData } from 'src/postdata';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-post',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  

  ELEMENT_DATA : PostData[];
  displayedColumns: string[] = ['userId', 'id' , 'title' , 'body'];
  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private service:PostsService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
    this.getAllPosts();
  }

  public getAllPosts(){
    let resp = this.service.getPosts();
    resp.subscribe(report=>this.dataSource.data=report  as PostData[])
  }
  dataSource = new MatTableDataSource<PostData>(this.ELEMENT_DATA);
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
