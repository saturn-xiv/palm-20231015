"""create nut.crawler-logs table

Revision ID: 77a369046c39
Revises: a87f6b8a5137
Create Date: 2023-05-25 17:39:53.457840

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '77a369046c39'
down_revision = 'a87f6b8a5137'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'crawler_logs',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('url', sa.String(length=255), nullable=False),
        sa.Column('body', sa.LargeBinary, nullable=False),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_crawler_logs_url', 'crawler_logs', ['url'])


def downgrade() -> None:
    op.drop_table('crawler_logs')
